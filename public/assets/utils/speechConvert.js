

let isRecognizing = false;

  if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser doesn't support the Web Speech API. Please use Chrome or Edge.");
} else {
    // Create a new instance of SpeechRecognition
    const recognition = new webkitSpeechRecognition();

    recognition.continuous = true; // Capture only one result
    recognition.interimResults = true; // Get the final result, not partial results
    recognition.lang = 'en-US'; // Set the language to English
    
const micButton = document.getElementById('startBtn'); // or stopBtn initially
let isRecognizing = false;

micButton.addEventListener('click', function(event) {
    if (!isRecognizing) {
        recognition.start();
        isRecognizing = true;
        console.log("starting the mic");
        micButton.id = 'stopbtn';
        document.getElementById('mic').classList.add('recording');
    } else {
        micButton.id = 'startBtn';
        recognition.stop();
        isRecognizing = false;
        console.log("stopping the mic");
        // document.getElementById('mic').classList.remove('recording');
    }
});


    // Handle the result when speech is detected

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // Get the speech result
        // document.getElementById('result').innerText = `You said: ${transcript}`;
        console.log(`You said: ${transcript}`);
      
        $('#userAnswerInput').val(transcript);
       
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };
    recognition.onstart = () => {
        console.log('Speech recognition started');
    };
    recognition.onend = () => {
        $('#generateQts').html(' <i class="fa fa-spinner fa-spin"></i>Loading');
         $('#startBtn').addClass('displayNone');
         document.getElementById('mic').classList.remove('recording');
    };

}



  const onUserSumbmitAnswer =()=>{
        let transcript =  $('#userAnswerInput').val();
        let question_id =  $('#question_id').val();
         if(transcript)
         {
                onUserSumbmitAnswerFutherAction(transcript,question_id);
         }else{
            messagePop("No answer Found",'error');
         }
       
  }
   const onUserSumbmitAnswerFutherAction =(transcript,question_id)=>{
     $('#SubmitAnswerButton').css('background-color','#128C7E');
     $('#user_answer').val(transcript);
      let date= new Date();
      afterSubmitAppendUserAnswer(transcript,date,question_id);
    
   }
    const afterSubmitAppendUserAnswer=(transcript,date,question_id)=>{
        $('.chat-messages').append(` <div class="message sent">
            <div class="message-content">
                <input type="hidden" name="answer[]" value="${transcript}">
                <p class="receive-text" question_id="${question_id}">${transcript}</p>
                 <div class="words" contenteditable>
                         <p id="p"></p>
                         <p id="message"></p>
                 </div>
                <span class="timestamp">${date.getHours()}:${date.getMinutes().toString().padStart(2,'0')}</span>
                <div class="status-indicator">
                    <i class="fas fa-check-double"></i>
                </div>
                <div class="edit-box" > 
                    <i class="fas fa-edit" onclick="getDatatoEdit(this)" question_id="${question_id}"></i>
                </div>
            </div>
        </div>`);
        $('#userAnswerInput').val('');
        processAfterEndingRecognitsation();

    }

const processAfterEndingRecognitsation=()=>{
      
        let skill=$('#skill_id_of_user').val();
        let level_id=$('#level_id').val();
        let user_id=$('#user_id').val();
        let email=$('#user_email').val();
        let question_id=$('#question_id').val();
        let answer=$('#user_answer').val();
        console.log(answer,question_id,email);
         if(question_id && answer && email)
         {
            submitResponse(email,question_id,answer);
         }else{
            console.log("no submitted");
         }
        
         

}

const submitResponse=async(emailid,question_id,answer)=>{
      isRecognizing=false;
      
    let url=`https://evalaiapiv2-gygqaffwdvc7e0h2.northeurope-01.azurewebsites.net/submit_response/`;
    let parameters={
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({
        "emailid": emailid,
        "question_id": question_id,
        "candidate_answer": answer
        })
    };

     try{
        let response = await fetch(url,parameters);
        data = await response.json();
            if(data.followup_question)
            {
                $('#startBtn').removeClass('displayNone');
                calledNoOfQuestion++;
                let input =data.followup_question.question;
                if (input) {

                       $('#question_id').val(data.FollowupID);
                        getAudioFile(input);
                } else {
                  console.log("No match found.");
                }
                erroHandlingCalledQuestion=1;
            }
            else if(data.next_question)
            {
                $('#startBtn').removeClass('displayNone');
                calledNoOfQuestion++;
                let input =data.next_question.question;
                if (input) {

                       $('#question_id').val(data.next_question.question_id);
                        getAudioFile(input);
                } else {
                  console.log("No match found.");
                }
                erroHandlingCalledQuestion=1;
            }else if(data.message){

                      let skill=$('#skill_id_of_user').val();
                      let level_id=$('#level_id').val();
                      let user_id=$('#user_id').val();
                      let email=$('#user_email').val();
                      let question_id=$('#question_id').val();
                      console.log(topic.value,level_id,emailid,user_id)
                    getQuestion(topic.value,level_id,emailid,user_id);  
            } 
     }catch(err) 
     {
        if (erroHandlingCalledQuestion < 4) {
        $('#generateQts').html(data.message);
        erroHandlingCalledQuestion++;  // increment first
        return submitResponse(emailid, question_id, answer);
        }
     }
}

let calledNoOfQuestion=1;
const toSubmitAnswer=()=>{
     if(calledNoOfQuestion==5)
     {
            $('.modal-left').html(`<p> Want to Submit ? </p> 
        <div class="modal-buttons">
            <button class="input-button " form_id="lawyerLogin" onclick="submitForm()">End</button>
            <button class="input-button "  onclick="closeModal()">Close</button>
        </div>
        `);
     }
}
let erroHandlingCalledQuestion=1;

const getQuestion= async(topic,difficulty,emailid,user_id)=>{
    let url=`https://evalaiapiv2-gygqaffwdvc7e0h2.northeurope-01.azurewebsites.net/get_question/?role=${topic}&difficulty=${difficulty}`;
    let parameters={
        method:"GET",
        headers: {
        'Content-Type': 'application/json',
        },
    };
     try{
        let response = await fetch(url,parameters);
         if (!response.ok) {
            // Check for 500 specifically
            if (response.status === 500) {
                console.warn("Server error 500: Internal Server Error");

                    if (erroHandlingCalledQuestion < 4) {
                    erroHandlingCalledQuestion++;  // increase counter first
                    return getQuestion(topic, difficulty, emailid, user_id);  // return to stop further code
                    } else {
                    $('#generateQts').html("Something went wrong. Please try again later.");
                    return;
                    }
            } else {
                console.warn(`Error: Received status code ${response.status}`);
            }
            if (erroHandlingCalledQuestion < 4) {
                erroHandlingCalledQuestion++;
                return getQuestion(topic, difficulty, emailid, user_id);
            } else {
                $('#generateQts').html("Something went wrong. Please try again later.");
                return;
            }
        }
        data = await response.json();

            if(data.question)
            {
                $('#startBtn').removeClass('displayNone');
                calledNoOfQuestion++;
                let input =data.question;
                $('#question_id').val(data.question_id);
                if (input) {
                        getAudioFile(input);
                        console.log(input,"also fetching audio file");
                } else {
                  console.log("No match found.");
                }
                erroHandlingCalledQuestion=1;
            }else if(data.message){
                    if(erroHandlingCalledQuestion<4)
                    {
                        $('#generateQts').html(data.message);
                        erroHandlingCalledQuestion++;  // increment first
                        return getQuestion(topic, difficulty, emailid, user_id);
                    }   
            } 
     }catch(err)
     {
            if (erroHandlingCalledQuestion < 4) {
                erroHandlingCalledQuestion++;  // increment first
                return getQuestion(topic, difficulty, emailid, user_id);
            }
     }
}

function  getDatatoEdit(event){
      let receiveText =$(event).closest('.sent').find('.receive-text');
    let question_id =$(event).attr('question_id');

     if($(event).hasClass("fa-save")){
            $(event).removeClass('far fa-save');
            $(event).addClass('fas fa-edit');
            receiveText.attr('contenteditable', false);
            receiveText.removeAttr('style'); 
            afterEditUpdateAnswer(receiveText.text(),question_id);
     }else{
            receiveText.attr('contenteditable', true).focus();
            receiveText.css({
            border: '1px solid #ccc',
            padding: '2px',
            outline: 'none'
            });
            $(event).removeClass('fas fa-edit');
            $(event).addClass('far fa-save');
     }

}

const afterEditUpdateAnswer =async(user_answer,question_id)=>
{

 console.log("fetch is called");
    let userEmail=$('#user_email').val();

      socket.emit('answerUpdate',{
        "question_id": question_id,
        'user_answer':user_answer,
        'user_email':userEmail,

        }); 

}


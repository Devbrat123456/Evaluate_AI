
// let isRecognizing = false;

//   if (!('webkitSpeechRecognition' in window)) {
//     alert("Your browser doesn't support the Web Speech API. Please use Chrome or Edge.");
// } else {
//     // Create a new instance of SpeechRecognition
//     const recognition = new webkitSpeechRecognition();

//     recognition.continuous = true; // Capture only one result
//     recognition.interimResults = true; // Get the final result, not partial results
//     recognition.lang = 'en-US'; // Set the language to English
    
// const micButton = document.getElementById('startBtn'); // or stopBtn initially

// micButton.addEventListener('click', function(event) {
//     if (!isRecognizing) {
//         recognition.start();
//         isRecognizing = true;
//         console.log("starting the mic");
//         micButton.id = 'stopbtn';
//         document.getElementById('mic').classList.add('recording');
//     } else {
//         micButton.id = 'startBtn';
//         recognition.stop();
//         isRecognizing = false;
//         console.log("stopping the mic");
//         // document.getElementById('mic').classList.remove('recording');
//     }
// });


//     // Handle the result when speech is detected

//     recognition.onresult = (event) => {
//         const transcript = event.results[0][0].transcript; // Get the speech result
//         // document.getElementById('result').innerText = `You said: ${transcript}`;
//         console.log(`You said: ${transcript}`);
      
//         $('#userAnswerInput').val(transcript);
       
//     };

//     recognition.onerror = (event) => {
//         console.error('Speech recognition error:', event.error);
//     };
//     recognition.onstart = () => {
//         console.log('Speech recognition started');
//     };
//     recognition.onend = () => {
//         $('#generateQts').html(' <i class="fa fa-spinner fa-spin"></i>Loading');
//          $('#startBtn').addClass('displayNone');
//          document.getElementById('mic').classList.remove('recording');
//     };

// }

 
var calledNoOfQuestion=1;
const limitQuestion=12;
var base_url_for_Api;
var api_key;


 const fetchSubscriptionKeyAndBaseUrl=async(req,res)=>{
     try{
           
                     let sessionId=sessionStorage.getItem('session_id');
                     base_url_for_Api="https://apiauthenticator.azure-api.net/docs/";
                     
                     api_key="22f0352b4a644d6b9f534aa7e43d5d04";
                      $('#session_id').val(sessionId);
                    getQuestionNew(sessionId);

     }
     catch(err)
     {
         console.warn(err);

     }
    
 }   


  const onUserSumbmitAnswer =()=>{
        let transcript =  $('#userAnswerInput').val();
        let question_id =  $('#question_id').val();

        // console.log("what you are submiting ",transcript,question_id);
         if(transcript && transcript!=' ' && question_id)
         {
                onUserSumbmitAnswerFutherAction(transcript,question_id);
         }else{
            messagePop("No answer Found Please Provide Answer",'error');
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
          $('#generateQts').html('<i class="fa fa-spinner fa-spin"></i>');

    }

const processAfterEndingRecognitsation=()=>{
      
        
        let sessionId=$('#session_id').val();
        let question_id=$('#question_id').val();
        let answer=$('#user_answer').val();
         if(question_id && answer && sessionId)
         {
            submitResponse(sessionId,question_id,answer);
         }else{
            console.log("no submitted");
         }
        
         

}


const submitResponse=async(sessionId,question_id,answer)=>{
      isRecognizing=false;
    let url=`${base_url_for_Api}answer`;
    let parameters={
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
         'Ocp-Apim-Subscription-Key':api_key

        },
        body:JSON.stringify({
        "session_id": sessionId,
        "question_id": question_id,
        "answer": answer
        })
    };

     try{
        let response = await fetch(url,parameters);
        data = await response.json();
           if(calledNoOfQuestion>=limitQuestion)
           {
                 return confirmationToEndSession();
           }
            let session_id=$('#session_id').val();
            getQuestionNew(session_id);  

     }catch(err) 
     {
        if (erroHandlingCalledQuestion < 4) {
        $('#generateQts').html(data.message);
        erroHandlingCalledQuestion++;  // increment first
        await new Promise(resolve => setTimeout(resolve, 1000 * erroHandlingCalledQuestion));

        return submitResponse(sessionId, question_id, answer);
        }else{

             $('#generateQts').html("Something went wrong. Please try again later.");
        }
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
              
                calledNoOfQuestion++;
                let input =data.question;
                $('#question_id').val(data.question_id);
                if (input) {
                        getAudioFile(input);
                        console.log(input,"also fetching audio file");
                } else {
                  messagePop("No match found.",'error');
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

const getQuestionNew= async(session_id)=>{
    let url=`${base_url_for_Api}next-question`;

    let parameters={
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key':api_key
        },
        body:JSON.stringify({
            session_id: session_id
        })

    };
     try{
        let response = await fetch(url,parameters);
         if (!response.ok) {
            // Check for 500 specifically
            if (response.status === 500) {
                console.warn("Server error 500: Internal Server Error");

                    if (erroHandlingCalledQuestion < 4) {
                    erroHandlingCalledQuestion++;  // increase counter first
                    return getQuestionNew(session_id);  // return to stop further code
                    } else {
                    $('#generateQts').html("Something went wrong. Please try again later.");
                    return;
                    }
            } else {
                console.warn(`Error: Received status code ${response.status}`);
            }
            if (erroHandlingCalledQuestion < 4) {
                erroHandlingCalledQuestion++;
                return getQuestionNew(session_id);
            } else {
                $('#generateQts').html("Something went wrong. Please try again later.");
                return;
            }
        }
        data = await response.json();

            if(data.question)
            {
              
                calledNoOfQuestion++;
                let input =data.question;
                $('#question_id').val(data.question_id);
                if (input) {
                        getAudioFile(input);
                        console.log(input,"also fetching audio file");
                } else {
                  messagePop("No match found.",'error');
                }
                erroHandlingCalledQuestion=1;
            }else if(data.message){
                    if(erroHandlingCalledQuestion<4)
                    {
                        $('#generateQts').html(data.message);
                        erroHandlingCalledQuestion++;  // increment first
                        return getQuestionNew(session_id);
                    }   
            } 
     }catch(err)
     {
            if (erroHandlingCalledQuestion < 4) {
                erroHandlingCalledQuestion++;  // increment first
                return getQuestionNew(session_id);
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

        let sessionId=$('#session_id').val();
         if(question_id && user_answer && sessionId)
         {
            updateResponse(sessionId,question_id,user_answer);
         }else{
            console.log("no Updation");
         }
     
}


const updateResponse=async(sessionId,question_id,answer)=>{
    // let url=`https://evalaiaiques-h3emesa6dngufsbt.northeurope-01.azurewebsites.net/answer`;
    let url=`${base_url_for_Api}answer`;


    let parameters={
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key':api_key
        },
        body:JSON.stringify({
        "session_id": sessionId,
        "question_id": question_id,
        "answer": answer
        })
    };

     try{
        let response = await fetch(url,parameters);
        data = await response.json();
         
     }catch(err) 
     {
        if (erroHandlingCalledQuestion < 4) {
        $('#generateQts').html(data.message);
        erroHandlingCalledQuestion++;  // increment first
        await new Promise(resolve => setTimeout(resolve, 1000 * erroHandlingCalledQuestion));

        return updateResponse(sessionId, question_id, answer);
        }else{

           messagePop("Something went wrong ");
        }
     }
}


const FiveQuestionCalledPostAction=()=>{
    
     let htmlMessage=`<p>Your Responses Has been Received .Please Wait For Result , once Evaluated you will be informed </p>`;
     $('.chat-input').html(htmlMessage);

    let sessionId=sessionStorage.getItem('session_id');
     disablingToEdit();
     evaluateAnswerApi(sessionId);
}

const disablingToEdit = async () => {
    let editClasses = document.querySelectorAll('.fa-edit');
    editClasses.forEach(el => {
        el.classList.remove('fa-edit');
    });
};






const confirmationToEndSession=()=>{
     if(calledNoOfQuestion>=limitQuestion)
     {     
        Swal.fire({
        title: 'Are you sure to End The Session Once Submitted you cannot change you answer?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, do it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                 FiveQuestionCalledPostAction();
                 return true;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                        onSessionEndCancel();
                    return false;
            }
        });

     }else{
        console.log("no of question called 5");
     }
    return false;

}

const onSessionEndCancel=async()=>{
                        messagePop('You can just edit your record','error');
                         $('#SubmitAnswerButton').addClass('displayNone');
                         $('#startBtn').addClass('displayNone');
                         $('#generateQts').html('<span onclick="confirmationToEndSession()">Submit</span>');


}


const getResultOfQuestion =async()=>{


    // Array.from(getAllQuestionAnswer).forEach((element)=>{
    //         let question_id =$(element).attr('question_id');
    //         let answer =$(element).text();
    //          evaluateAnswerApi(question,answer);

    // })
    /*
     in foreach loop ,you are sending the request to get data , immediately for all question but in this case there is no assurity of getting response immediately some may get late response no fixed time , 
    //  if you wish to execute  ,loop  second loop to execute only aftet first question evalution completion thhen use for of loop , not foreach , then use await keyword for all calling evaluateAnswerApi;  instead of using this way  now you can use new way promise.all  it will do the same thing but it is more fast then conventional way , 


   Promise.all() is a method in JavaScript used to run multiple asynchronous operations (promises) in parallel and wait for all of them to complete.


    why not use foreach because
    Just executes a function for each element.

    Doesn't return anything (returns undefined). because it takes callback function in parameter , which let does not return anything .

    So you can't use it to collect returned values (e.g., Promises).
map:
Executes a function for each element, and returns an array of the results.

Perfect for when each function returns a Promise, and you want to use Promise.all():
*/
     /* first collect all promises */
     // const allPromises=  Array.from(getAllQuestionAnswer).map((element)=>{
     //    let question=$(element).attr('question_id');
     //    let answer=$(element).text();
     //    console.log(question,answer,"this is answerUpdate");
     // });
   // console.log(allPromises);

   // const getResultAfterEvaluation = await Promise.all(allPromises);    // waiting for all promises to be resolved 
   //               displayTheResult(getResultAfterEvaluation);
}

const evaluateAnswerApi= async(session_id)=>{
  // let url=`https://evalaiaiques-h3emesa6dngufsbt.northeurope-01.azurewebsites.net/evaluate-session`;

    let url=`${base_url_for_Api}evaluate-session`;

    let parameters={
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({
    session_id: session_id
    })
    }
    let response = await fetch(url,parameters);
    let data = response.json();
     console.log(data);
     return data;       // returning promises;
}


const displayTheResult =(result)=>{
     console.log(result,"this is result");
}

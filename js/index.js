const allQuestions = [".question1", ".question2", ".question3", ".question4", ".question5", ".question6", ".question7", ".question8"];

        var clicked = false;

        for(var i = 0; i < allQuestions.length; i++){
            const addition = i + 1;

            const question = document.querySelector(".question" + addition);
            question.addEventListener("click", function(){
                    gsap.to(".answer" + addition, 1, {translateY: 0, display: "block", opacity: 1, ease: Power3.easeInOut});
            });
        }
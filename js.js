$('#document').ready(function () {

    $('.rules_header').click(function () {
        $('riles_main').slideToggle(500)
    });
    let currentlevel = 0;
    let levelProgress = 0;

    showRebus(rebus0);

    let formInput = document.getElementById("formInput");
    let formBTN = document.getElementById("formBtn");
    let answer = [
        "1000$",
        "привыкни к апарату",
        "просто",
        "вот так",
        "карты",
    ]


    function showRebus(classBlock) {
        console.log(classBlock);
    }
    function showRebus(classBlock) {
        document.getElementById(classBlock);
        classBlock.classList.add('active');
    }


    formBTN.addEventListener('click', function (event) {
        event.preventDefault();
        let inputText = formInput.value;
        if (inputText == answer[levelProgress]) {
            levelProgress++;

            let temp = document.getElementById(`rebus${levelProgress}`);
            showRebus(temp);

            console.log(temp);
            showRebus(temp);
            let numwidth = 100 * levelProgress - 90;
            $('#progBar').css('width', numwidth);

            if(levelProgress == answer.length){
                $('#winAction').toggle();
            }

        } else {
            alert("неа заново ");
        }

    });
});


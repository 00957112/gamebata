$(document).ready(() => {
    localStorage.clear();
    $("#fairydia").hide();
    $("#piecepaper").hide();
    $("#phonedia").hide();
    $("#deskAndFish").hide();
    $("#loadingimg").show();
    $("#doorAndPhone").hide();
    $("#dialogKey").hide();
    $("#dialogBook").hide();
    $("#floor2").hide();
    $("#windowandfairy").hide();
    $("#choice").hide();
    $("#footou").hide();
    $("#choose").hide();
    $(".hidephoto").hide();
    $("#box").hide();
    $("#corner").hide();
    $("#cornerbotton").hide();
    $("#phonetonum").hide();
    $("#forest").hide();
    $("#bugs").hide();
    $("#dialogBook").dialog({
        autoOpen: false,
        modal: true, height: 200, width: 300,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    $("#dialogfish").dialog({
        autoOpen: false,
        modal: true, height: 150, width: 200,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    $("#dialogpiano").dialog({
        autoOpen: false,
        modal: true, height: 200, width: 250,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    $("#dialogbox").dialog({
        autoOpen: false,
        modal: true, height: 200, width: 250,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    $("#dialogfootou").dialog({
        autoOpen: false,
        modal: true, height: 200, width: 250,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    $("#dialogKey").dialog({
        autoOpen: false,
        modal: true, height: 200, width: 250,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    $(".dia").hide();
    $("#phone1").hide();
    $("#pianono").hide();
    $("#piano_p").hide();
    $("#dialogDoor").dialog({
        autoOpen: false,
        modal: true, height: 140,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    $("#dialogKeyhole").dialog({
        autoOpen: false,
        modal: true, height: 140,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    $("#deskAndFish").hide();
    $("#windowAndWoods").hide();
    $("#pianoAndpic").hide();
    $("#floor").hide();
    $("#dialog").dialog({
        autoOpen: false,
        modal: true, height: 600, width: 700,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 250
        }
    });
    window.setTimeout(() => {
        $(function () {
            let strattime = Date.now();
            $("#loadingimg").hide();
            $("#doorAndPhone").show();
            let intervalId;
            let counts = 0;
            let closePianokey = 1;
            let windowC = 1;
            let phone_complete = 0;
            let phone_complete2 = 0;
            let getbutton = 0;
            let getfairy = 0;
            let magnet = 0;
            let putbutton = 0;
            let button_complete = 0;
            let fishdia = 0;
            let footoukey = 0;
            let footou = 0;
            let breakdoor = 0;
            function phonering() {
                window.clearInterval(intervalId); document.getElementById("phoncall").play();
            }
            function stop() {
                document.getElementById("do1").pause();
                document.getElementById("do1").currentTime = 0;
                document.getElementById("re1").pause();
                document.getElementById("re1").currentTime = 0;
                document.getElementById("mi1").pause();
                document.getElementById("mi1").currentTime = 0;
                document.getElementById("fa1").pause();
                document.getElementById("fa1").currentTime = 0;
                document.getElementById("sol1").pause();
                document.getElementById("sol1").currentTime = 0;
                document.getElementById("ra1").pause();
                document.getElementById("ra1").currentTime = 0;
                document.getElementById("si1").pause();
                document.getElementById("si1").currentTime = 0;
            }
            $("#floortowindow").click(function () {
                if (windowC == 1) {
                    $("#windowopen").one("click", function () {
                        windowC = 0;
                        document.getElementById("towindow").setAttribute("src", "??????_2.png");
                        setTimeout(
                            function () {
                                document.getElementById("towindow").setAttribute("src", "??????_db.png");
                            }, 1900);
                        setTimeout(() => {
                            document.getElementById("bridbang").play(); //console.log("QQ");
                        }, 2000);
                    });
                }
                else {
                    $("#outwindow").click(
                        function () {
                            $("#forest").show();
                            $("#windowAndWoods").hide();
                        }
                    );
                }
                $("#windowAndWoods").show();
                //$("#pianoTowindow").trigger("click");
                $("#floor").hide();
            });
            $("#floortowindow2").click(function () {
                $("#bugs").hide();
                $("#phone").off("click",);
                $("#isAdoor").off("click",);
                $("#topiano").off("click",);
                $("#piecepaper").hide();
                $("#piano").off("click",);
                $("#box").hide();
                $("#fairy").off("click",);
                $("#fairydia").off("click",);
                $("#fairydia").hide();
                $("#windowandfairy").show(),
                    $("#pianoAndpic").hide()
                $("#pianono").hide();
                $("#piano_p").hide();
                $("#floor2").hide();
                $("#windowfairy").click(function () {
                    //console.log("5555");
                    document.getElementById("fairydia").innerHTML = "??????:<br>??????!";
                    $("#fairydia").show();
                    $("#fairydia").click(function () {
                        fairy_dia3();
                        //console.log("666666");
                    });
                });
            });
            function fishtochoose() {
                $("#deskAndFish").hide();
                $("#fishplace").off("click",);
                $("#fairydia").hide();
                $("#fairydia").off("click",);
                $("#think").hide();
                $("#throw").hide();
                $("#choose").show();
                $("#choice").show();
                $("#choice").click(function () {
                    $("#choose").attr("style", "background-color:black");
                    $("#choice").hide();
                    $("#think").show();
                    $("#throw").show();
                });
                $("#throw").click(function () {
                    //console.log("t");
                    $("#deskpic").attr("src", "????????????.png");
                    $("#choose").hide();
                    $("#windowTodesk").trigger("click");
                })
                $("#think").click(function () {
                    //console.log("k");
                    $("#choose").hide();
                    let endtime = Date.now();
                    let timeall = new Date(endtime - strattime);
                    let finaltime = {
                        hours: timeall.getUTCHours(),
                        minutse: timeall.getUTCMinutes(),
                        sec: timeall.getUTCSeconds()
                    }
                    let outtime = JSON.stringify(finaltime);
                    localStorage.setItem("endtime", outtime);
                    setTimeout(() => { $(".ending")[0].click(); }, 3000);

                })
            }
            let checkpianoclose = 0; let ans;
            function check(arr, cnt) {
                //console.log(arr);
                for (let i = 23; i >= 0; i -= 1) {
                    if (ans[i] != arr[cnt])
                        return;
                    if (cnt == 0)
                        cnt = 23;
                    else
                        cnt -= 1;
                }
                checkpianoclose = 1;
                if (checkpianoclose == 1) {
                    closepiano();
                    document.getElementById("pianono").setAttribute("src", "??????open.png");
                    window.setTimeout(function () { $("#dialogpiano").dialog("open"); }, 1000);
                    getbutton = 1;
                }
            }
            function closepiano() {
                $("#Do").off("click",);
                $("#Re").off("click",);
                $("#Mi").off("click",);
                $("#Fa").off("click",);
                $("#Sol").off("click",);
                $("#Ra").off("click",);
                $("#Si").off("click",);
                $("#piano").off("click",);
                $("#piano_p").hide(); if (checkpianoclose == 1) { closePianokey = 0; }
            }
            //????????? ??????1
            let dia_phone_idx = 0;
            let dia_phone = ["??????:<br>?", "??????:<br>???????????? ???", "<br>(???...)"]
            function changedia_phone() {
                if (dia_phone_idx == 3) {
                    $("#phonedia").hide();
                    document.getElementById("phonedia").innerHTML = "??????:<br>????????????~";
                    return;
                }
                else {
                    document.getElementById("phonedia").innerHTML = dia_phone[dia_phone_idx];
                    dia_phone_idx += 1;
                }
            }
            //????????? ??????1
            let dia_fairy_idx = 0;
            let dia_fairy = ["??????:<br>?", "??????:<br>???????????????????????????...", "??????:<br>(??????????????????)", "??????:<br>??????????????????...", "????????????:<br>#$%^&**&^%$#@...", "??????:<br>???????????????????????????..."]
            function fairy_dia() {
                //console.log(dia_fairy_idx);
                if (dia_fairy_idx == 6) {
                    $("#fairydia").hide();
                    document.getElementById("fairydia").innerHTML = "????????????:<br>@#$%^&*(";
                    return;
                }
                else {
                    document.getElementById("fairydia").innerHTML = dia_fairy[dia_fairy_idx];
                    dia_fairy_idx += 1;
                }
            }

            let dia_phone_idx2 = 0;
            let dia_phone2 = ["??????:<br>!", "??????:<br>????????????????????????????????????!", "??????:<br>????????????~", "??????:<br>???????????????(??????)"];
            function changedia_phone2() {
                phone_complete2 = 1;
                document.getElementById("fairydia").innerHTML = "????????????:<br>@#$%^&&^%#%";
                if (dia_phone_idx2 == 4) {
                    $("#phonedia").hide();
                    return;
                }
                else {
                    document.getElementById("phonedia").innerHTML = dia_phone2[dia_phone_idx2];
                    dia_phone_idx2 += 1;
                }
            }
            let dia_fairy_idx2 = 0;
            let dia_fairy2 = ["??????:<br>????", "??????:<br>????????????????????????", "????????????:<br>@#$%^&&^%#%", "??????:<br>?????????????????????????...", "??????:<br>??????????????????????????????????????????",
                "??????:<br>... ...", "??????:<br>???!  ??????...", "??????:<br>?????????????????????", "????????????:<br>@#^&&^%", "??????:<br>???!?????????????????????", "<br>?????????..."];
            function fairy_dia2() {
                //console.log(dia_fairy_idx2);
                if (dia_fairy_idx2 == 11) {
                    $("#fairydia").hide();
                    $("#pianoAndpic").hide();
                    document.getElementById("pianofairy").setAttribute("src", "??????_1.png");
                    $("#floor2").show();
                    document.getElementById("video").play();
                    return;
                }
                else {
                    document.getElementById("fairydia").innerHTML = dia_fairy2[dia_fairy_idx2];
                    dia_fairy_idx2 += 1;
                }
            }
            let dia_fairy_idx3 = 0;
            let dia_fairy3 = ["??????:<br>??????????????????!", "????????????:<br>... ...", "??????:<br>?????????...", "??????:<br>????????????!?",
                "??????:<br>????????????", "<br>(??????????????????????????????)", "??????:<br>?????????...", "??????:<br>?????????...", "??????:<br>???????????????", "??????:<br>... ...", "??????:<br>...!?<br>(????????????)"];
            function fairy_dia3() {
                if (dia_fairy_idx3 == 11) {
                    $("#fairydia").hide();
                    $("#bugs").hide();
                    $("#phone").off("click",);
                    $("#isAdoor").off("click",);
                    $("#topiano").off("click",);
                    $("#piecepaper").hide();
                    $("#piano").off("click",);
                    $("#box").hide();
                    $("#fairy").off("click",);
                    $("#fairydia").off("click",);
                    $("#fairydia").hide();
                    $("#windowandfairy").hide();
                    getfairy = 1;
                    closepiano();
                    $("#outwindow").click(
                        function () {
                            //console.log("ww");
                            $("#forest").show();
                            $("#windowAndWoods").hide();
                        }
                    );
                    $("#windowAndWoods").show(),
                        $("#pianoAndpic").hide()
                    $("#pianono").hide();
                    $("#piano_p").hide();
                    return;
                }
                else {
                    document.getElementById("fairydia").innerHTML = dia_fairy3[dia_fairy_idx3];
                    dia_fairy_idx3 += 1;
                }
            }
            const scriptURL = "https://script.google.com/macros/s/AKfycbzKUYRm5oz_qlKaKg1Epe3kDqI6zo2yoYcTKysDY5fuSDBxQQnSF99t5J7KYdcsFZYm2g/exec";
            readMethod();
            function readMethod() {

                let testC = [];
                let testP = [];
                let testP1 = [];
                $.ajax({
                    url: scriptURL,
                    type: "GET",

                    // ????????????????????????...
                    success: function (response) {
                        for (let ii = 0; ii < 13; ii++) {
                            for (let jj = 0; jj < 26; jj++) {

                                testC.push(response[ii][jj]);

                            }
                        }
                        for (let ii = 13; ii < 40; ii++) {
                            for (let jj = 0; jj < 24; jj++) {

                                testP.push(response[ii][jj]);

                            }
                        }
                        for (let ii = 432; ii < 456; ii++) {
                            testP1.push(testP[ii]);
                        }
                        box_ans = testC[241];
                        //console.log(box_ans);
                        ans = testP1;
                        //console.log(ans);
                    },
                    error: function () {
                        console.log('read ??????');
                    }
                });
            }
            let box_ans;
            $("#checkboxvalue").click(function () {
                let boxnum = document.getElementById("boxnum1").value;
                boxnum += document.getElementById("boxnum2").value;
                boxnum += document.getElementById("boxnum3").value;
                boxnum += document.getElementById("boxnum4").value;
                //console.log(boxnum);
                if (boxnum == box_ans) {
                    $("#box").hide();
                    $("#dialogbox").dialog("open");
                    magnet = 1;
                    return;
                }
                else {
                    document.getElementById("boxnum1").value = "";
                    document.getElementById("boxnum2").value = "";
                    document.getElementById("boxnum3").value = "";
                    document.getElementById("boxnum4").value = "";
                }
            });
            //-----------------------?????????
            $("#doorTopiano").click(
                function () {
                    $("#phonetonum").hide();
                    $("#phone1").hide();
                    $(".dia").hide();
                    $("#corner").hide();
                    $("#cornerbotton").hide();
                    $("#phone").off("click",);
                    $("#isAdoor").off("click",);
                    $("#phonedia").off("click",);
                    $("#phonedia").hide();
                    $("#tobugs").click(
                        function () {
                            $("#bugs").show();
                            $("#pianoAndpic").hide();
                        }
                    );
                    $("#pianoAndpic").show(),
                        $("#doorAndPhone").hide()
                    $("#topiano").click(function () {//??????(???)
                        //console.log("eee");
                        $("#pianono").show();
                    });
                    $("#piano").click(function () {//??????(??????)
                        //console.log("eee1");
                        if (closePianokey == 1) { $("#piano_p").show(); }
                    });
                    let cnt = 0;
                    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    $("#Do").click(function () {//do
                        stop();
                        arr[cnt] = 1;
                        if (phone_complete == 1)
                            check(arr, cnt);
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("do1").play();
                        //console.log("do");
                    });
                    $("#Re").click(function () {//re
                        stop();
                        arr[cnt] = 2;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("re1").play();
                        //console.log("re");
                    });
                    $("#Mi").click(function () {//mi
                        stop();
                        arr[cnt] = 3;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("mi1").play();
                        //console.log("mi");
                    });
                    $("#Fa").click(function () {//fa
                        stop();
                        arr[cnt] = 4;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("fa1").play();
                        //console.log("fa");
                    });
                    $("#Sol").click(function () {//sol
                        stop();
                        arr[cnt] = 5;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("sol1").play();
                        //console.log("sol");
                    });
                    $("#Ra").click(function () {//ra
                        stop();
                        arr[cnt] = 6;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("ra1").play();
                        //console.log("ra");
                    });
                    $("#Si").click(function () {//si
                        stop();
                        arr[cnt] = 7;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("si1").play();
                        //console.log("si");
                    });
                    dia_fairy_idx = 0;
                    dia_fairy_idx2 = 0;
                    if (getfairy == 0) {
                        $("#fairy").click(function () {
                            if (dia_fairy_idx == 0 && dia_fairy_idx2 == 0)
                                $("#fairydia").show();
                        });
                        $("#fairydia").click(function () {
                            if (phone_complete2 == 0)
                                fairy_dia();
                            else
                                fairy_dia2();
                        });
                    }
                }
            )
            $("#deskTodoor").click(
                function () {
                    $("#phone").click(function () {//??????
                        if (tostart) { intervalId = window.setInterval(phonering, 15000); tostart = 0; }
                        else {
                            document.getElementById("phoncall").pause();
                            if (document.getElementById("phoncall").currentTime != 0) {
                                document.getElementById("phoncall").currentTime = 0;
                                $("#phonedia").show();
                                $("#phonedia").click(function () {
                                    if (getbutton)
                                        changedia_phone2();
                                    else
                                        changedia_phone();
                                });
                            }
                        }
                        $("#phone1").show();
                    });
                    $("#isAdoor").click(function () {//???
                        if (breakdoor == 1) {
                            let endtime = Date.now();
                            let timeall = new Date(endtime - strattime);
                            let finaltime = {
                                hours: timeall.getUTCHours(),
                                minutse: timeall.getUTCMinutes(),
                                sec: timeall.getUTCSeconds()
                            }
                            let outtime = JSON.stringify(finaltime);
                            localStorage.setItem("endtime", outtime);
                            setTimeout(() => { $(".ending")[2].click(); }, 2000);
                        }
                        else if (footou == 1) {
                            $("#door").attr("src", "??????.png");
                            breakdoor = 1;
                            //console.log("win");
                        }
                        else
                            $("#dialogDoor").dialog("open");
                    });
                    $("#dialogDoor").dialog({
                        autoOpen: false,
                        modal: true, height: 140,
                        show: {
                            effect: "blind",
                            duration: 500
                        },
                        hide: {
                            effect: "blind",
                            duration: 250
                        }
                    });
                    $("#doorAndPhone").show(),
                        $("#deskAndFish").hide();
                    $("#fishplace").off("click",);
                    $("#fairydia").hide();
                    $("#fairydia").off("click",);
                    $("#choice").hide();
                }
            )
            $("#windowTodesk").click(
                function () {
                    if (fishdia == 1) {
                        $("#fishplace").click(
                            function () {
                                //console.log("123");
                                if (magnet == 1) {
                                    if (footoukey == 0) {
                                        $("#dialogKey").dialog("open");
                                        footoukey = 1;
                                    }
                                }
                                else {
                                    let endtime = Date.now();
                                    let timeall = new Date(endtime - strattime);
                                    let finaltime = {
                                        hours: timeall.getUTCHours(),
                                        minutse: timeall.getUTCMinutes(),
                                        sec: timeall.getUTCSeconds()
                                    }
                                    let outtime = JSON.stringify(finaltime);
                                    localStorage.setItem("endtime", outtime);
                                    setTimeout(() => { $(".ending")[1].click(); }, 2000);
                                }
                            });
                    }
                    else if (getfairy == 1) {
                        $("#fishplace").one("click",
                            function () {
                                document.getElementById("fairydia").innerHTML = "??????:<br>??????...???????????????...";
                                $("#fairydia").show();
                                fishdia = 1;
                            });
                    }
                    else {
                        $("#fishplace").click(
                            function () {
                                $("#dialogfish").dialog("open");
                            });
                    }
                    $("#fairydia").click(function () {
                        $("#fairydia").hide();
                        //console.log("desk");
                        if (getfairy == 1) { fishtochoose(); }
                    });
                    /*$("#choice").click(function(){
                      $("#deskAndFish").hide();
                      $("#choose").show();
                    });*/
                    $("#forest").hide();
                    $("#phone").off("click",);
                    $("#isAdoor").off("click",);
                    $("#piecepaper").hide();
                    $("#windowandfairy").hide();
                    $("#deskAndFish").show(),
                        $("#windowAndWoods").hide();
                    $("#chair").draggable({
                        drag: function () {
                            counts++; //console.log(counts);
                            if (counts == 30) {
                                $("#chair").draggable("option", "disabled", true);
                                //console.log("stop");
                            }
                        },

                    })
                }
            )
            $("#pianoTowindow").click(
                function () {
                    $("#bugs").hide();
                    $("#phone").off("click",);
                    $("#isAdoor").off("click",);
                    $("#topiano").off("click",);
                    $("#piecepaper").hide();
                    $("#piano").off("click",);
                    $("#box").hide();
                    $("#fairy").off("click",);
                    $("#fairydia").off("click",);
                    $("#fairydia").hide();
                    document.getElementById("fairydia").innerHTML = "????????????:<br>@#$%^&*(";
                    dia_fairy_idx = 0;
                    dia_fairy_idx2 = 0;
                    closepiano();
                    if (windowC == 1) {
                        $("#windowopen").one("click", function () {
                            windowC = 0;
                            document.getElementById("towindow").setAttribute("src", "??????_2.png");
                            setTimeout(
                                function () {
                                    document.getElementById("towindow").setAttribute("src", "??????_db.png");
                                }, 1900);
                            setTimeout(() => {
                                document.getElementById("bridbang").play(); //console.log("QQ");
                            }, 2000);
                        });
                    }
                    else {
                        $("#outwindow").click(
                            function () {
                                //console.log("ww");
                                $("#forest").show();
                                $("#windowAndWoods").hide();
                            }

                        );

                    }
                    $("#windowAndWoods").show(),
                        $("#pianoAndpic").hide()
                    $("#pianono").hide();
                    $("#piano_p").hide();
                }
            )
            //-------------------------------------
            $("#doorTodesk").click(
                function () {
                    $("#phonetonum").hide();
                    if (fishdia == 1) {
                        $("#fishplace").click(
                            function () {
                                //console.log("123");
                                if (magnet == 1) {
                                    if (footoukey == 0) {
                                        $("#dialogKey").dialog("open");
                                        footoukey = 1;
                                    }
                                }
                                else {
                                    let endtime = Date.now();
                                    let timeall = new Date(endtime - strattime);
                                    let finaltime = {
                                        hours: timeall.getUTCHours(),
                                        minutse: timeall.getUTCMinutes(),
                                        sec: timeall.getUTCSeconds()
                                    }
                                    let outtime = JSON.stringify(finaltime);
                                    localStorage.setItem("endtime", outtime);
                                    setTimeout(() => { $(".ending")[1].click(); }, 2000);
                                }
                            });
                    }
                    else if (getfairy == 1) {
                        $("#fishplace").one("click",
                            function () {
                                document.getElementById("fairydia").innerHTML = "??????:<br>??????...???????????????...";
                                $("#fairydia").show();
                                fishdia = 1;
                            });
                    }
                    else {
                        $("#fishplace").click(
                            function () {
                                $("#dialogfish").dialog("open");
                            });
                    }
                    $("#fairydia").click(function () {
                        $("#fairydia").hide();
                        if (getfairy == 1) { fishtochoose(); }
                    });
                    /*$("#choice").click(function(){
                      $("#deskAndFish").hide();
                      $("#choose").show();
                    });*/
                    $("#phone1").hide();
                    $(".dia").hide();
                    $("#corner").hide();
                    $("#cornerbotton").hide();
                    $("#phone").off("click",);
                    $("#isAdoor").off("click",);
                    $("#phonedia").off("click",);
                    $("#phonedia").hide();
                    $("#deskAndFish").show();
                    $("#doorAndPhone").hide()
                    $("#chair").draggable({
                        drag: function () {
                            counts++; //console.log(counts);
                            if (counts == 30) {
                                $("#chair").draggable("option", "disabled", true);
                                //console.log("stop");
                            }
                        },

                    })
                }
            );
            $("#deskTowindow").click(
                function () {
                    $("#phone").off("click",);
                    $("#isAdoor").off("click",);
                    $("#fishplace").off("click",);
                    $("#piecepaper").hide();
                    $("#fairydia").hide();
                    $("#fairydia").off("click",);
                    $("#choice").hide();
                    if (windowC == 1) {
                        $("#windowopen").one("click", function () {
                            windowC = 0;
                            document.getElementById("towindow").setAttribute("src", "??????_2.png");
                            setTimeout(
                                function () {
                                    document.getElementById("towindow").setAttribute("src", "??????_db.png");
                                }, 1900);
                            setTimeout(() => {
                                document.getElementById("bridbang").play(); //console.log("QQ");
                            }, 2000);
                        });
                    }
                    else {
                        $("#outwindow").click(
                            function () {
                                //console.log("ww");
                                $("#forest").show();
                                $("#windowAndWoods").hide();
                            }
                        );
                    }
                    $("#windowAndWoods").show(),
                        $("#deskAndFish").hide()
                }
            )
            $("#windowTopiano").click(
                function () {
                    $("#tobugs").click(
                        function () {
                            $("#bugs").show();
                            $("#pianoAndpic").hide();
                        }
                    );
                    $("#forest").hide();
                    $("#phone").off("click",);
                    $("#isAdoor").off("click",);
                    $("#windowandfairy").hide();
                    $("#piecepaper").hide();
                    $("#pianoAndpic").show(),
                        $("#windowAndWoods").hide()
                    $("#topiano").click(function () {//??????(???)
                        //console.log("eee");
                        $("#pianono").show();
                    }); $("#piano").click(function () {//??????(??????)
                        //console.log("eee1");
                        if (closePianokey == 1) { $("#piano_p").show(); }

                    });
                    let cnt = 0;
                    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    $("#Do").click(function () {//do
                        stop();
                        arr[cnt] = 1;
                        if (phone_complete == 1)
                            check(arr, cnt);
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("do1").play();
                        //console.log("do");
                    });
                    $("#Re").click(function () {//re
                        stop();
                        arr[cnt] = 2;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("re1").play();
                        //console.log("re");
                    });
                    $("#Mi").click(function () {//mi
                        stop();
                        arr[cnt] = 3;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("mi1").play();
                        //console.log("mi");
                    });
                    $("#Fa").click(function () {//fa
                        stop();
                        arr[cnt] = 4;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("fa1").play();
                        //console.log("fa");
                    });
                    $("#Sol").click(function () {//sol
                        stop();
                        arr[cnt] = 5;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("sol1").play();
                        //console.log("sol");
                    });
                    $("#Ra").click(function () {//ra
                        stop();
                        arr[cnt] = 6;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("ra1").play();
                        //console.log("ra");
                    });
                    $("#Si").click(function () {//si
                        stop();
                        arr[cnt] = 7;
                        cnt += 1;
                        cnt %= 24;
                        document.getElementById("si1").play();
                        //console.log("si");
                    });
                    dia_fairy_idx = 0;
                    dia_fairy_idx2 = 0;
                    if (getfairy == 0) {
                        $("#fairy").click(function () {
                            if (dia_fairy_idx == 0 && dia_fairy_idx2 == 0)
                                $("#fairydia").show();
                        });
                        $("#fairydia").click(function () {
                            if (phone_complete2 == 0)
                                fairy_dia();
                            else
                                fairy_dia2();
                        });
                    }
                }
            )
            $("#pianoTodoor").click(
                function () {
                    $("#bugs").hide();
                    $("#pianono").hide();
                    $("#piano_p").hide();
                    $("#box").hide();
                    $("#topiano").off("click",);
                    $("#piano").off("click",);
                    $("#fairy").off("click",);
                    $("#fairydia").off("click",);
                    $("#fairydia").hide();
                    document.getElementById("fairydia").innerHTML = "????????????:<br>@#$%^&*(";
                    dia_fairy_idx = 0;
                    dia_fairy_idx2 = 0;
                    closepiano();
                    $("#phone").click(function () {//??????
                        if (tostart) { intervalId = window.setInterval(phonering, 15000); tostart = 0; }
                        else {
                            document.getElementById("phoncall").pause();
                            if (document.getElementById("phoncall").currentTime != 0) {
                                document.getElementById("phoncall").currentTime = 0;
                                $("#phonedia").show();
                                $("#phonedia").click(function () {
                                    if (getbutton)
                                        changedia_phone2();
                                    else
                                        changedia_phone();
                                });
                            }
                        }
                        $("#phone1").show();
                    });
                    $("#isAdoor").click(function () {//???
                        if (breakdoor == 1) {
                            let endtime = Date.now();
                            let timeall = new Date(endtime - strattime);
                            let finaltime = {
                                hours: timeall.getUTCHours(),
                                minutse: timeall.getUTCMinutes(),
                                sec: timeall.getUTCSeconds()
                            }
                            let outtime = JSON.stringify(finaltime);
                            localStorage.setItem("endtime", outtime);
                            setTimeout(() => { $(".ending")[2].click(); }, 2000);
                        }
                        else if (footou == 1) {
                            $("#door").attr("src", "??????.png");
                            breakdoor = 1;
                            //console.log("win");
                        }
                        else
                            $("#dialogDoor").dialog("open");
                    });
                    $("#dialogDoor").dialog({
                        autoOpen: false,
                        modal: true, height: 140,
                        show: {
                            effect: "blind",
                            duration: 500
                        },
                        hide: {
                            effect: "blind",
                            duration: 250
                        }
                    });
                    $("#doorAndPhone").show(),
                        $("#pianoAndpic").hide()
                }
            )
            let tostart = 1;
            $("#tt").click(function () {
                //console.log("yyy");
                document.getElementById("phoncall").play();
            })

            $("#phone").click(function () {//??????
                if (tostart) { intervalId = window.setInterval(phonering, 15000); tostart = 0; }
                else {
                    document.getElementById("phoncall").pause();
                    if (document.getElementById("phoncall").currentTime != 0) {
                        document.getElementById("phoncall").currentTime = 0;
                        $("#phonedia").show();
                        $("#phonedia").click(function () {
                            if (getbutton)
                                changedia_phone2();
                            else
                                changedia_phone();
                        });
                    }
                }
                $("#phone1").show();
            });
            $("#isAdoor").click(function () {//???
                if (breakdoor == 1) {
                    let endtime = Date.now();
                    let timeall = new Date(endtime - strattime);
                    let finaltime = {
                        hours: timeall.getUTCHours(),
                        minutse: timeall.getUTCMinutes(),
                        sec: timeall.getUTCSeconds()
                    }
                    let outtime = JSON.stringify(finaltime);
                    localStorage.setItem("endtime", outtime);
                    setTimeout(() => { $(".ending")[2].click(); }, 2000);
                }
                else if (footou == 1) {
                    $("#door").attr("src", "??????.png");
                    breakdoor = 1;
                    //console.log("win");
                }
                else
                    $("#dialogDoor").dialog("open");
            });
            $("#chair").draggable({ axis: "x" });
            $("#Mbook").click(
                function () {
                    //console.log('memorys');
                    $("#dialogBook").dialog("open");
                });
            function phone_stop() {
                //console.log("ccc");
                document.getElementById("phonesound").pause();
                document.getElementById("phonesound").currentTime = 0;
            }
            let phonenum_arr = [-1, -1, -1, -1];
            let phonenum_ans = [7, 8, 4, 6];
            let phonenum_idx = 0;
            function checkphone(idx) {
                //console.log(phonenum_arr);
                for (let i = 3; i >= 0; i -= 1) {
                    if (phonenum_ans[i] != phonenum_arr[idx])
                        return;
                    if (idx == 0)
                        idx = 3;
                    else
                        idx -= 1;
                }
                phone_complete = 1;
                document.getElementById("bee").play();
                $("#phonetonum").hide();
            }
            //-----------------???????????? ????????????????????????
            $("#phonenum").click(function () {//?????????????????????
                //console.log("ppp");
                if (dia_phone_idx == 3 && phone_complete == 0)
                    $("#phonetonum").show();
            });

            $("#num1").click(function () {
                //console.log("1");
                //console.log(document.getElementById("phonesound").currentTime);
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 1;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num2").click(function () {
                //console.log("2");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 2;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num3").click(function () {
                //console.log("3");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 3;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num4").click(function () {
                //console.log("4");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 4;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num5").click(function () {
                //console.log("5");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 5;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num6").click(function () {
                //console.log("6");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 6;
                checkphone(phonenum_idx);
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num7").click(function () {
                //console.log("7");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 7;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num8").click(function () {
                //console.log("8");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 8;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num9").click(function () {
                //console.log("9");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 9;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#num0").click(function () {
                //console.log("0");
                if (document.getElementById("phonesound").currentTime != 0)
                    return;
                document.getElementById("phonesound").play();
                phonenum_arr[phonenum_idx] = 0;
                phonenum_idx += 1;
                phonenum_idx %= 4;
                window.setTimeout(function () { phone_stop(); }, 1200);
            });
            $("#tocorner").click(
                function () {
                    //console.log("sh...");
                    if (getbutton == 1 && button_complete == 0) {
                        if (putbutton == 0) {
                            $("#corner").show();
                            putbutton = 1;
                        }
                        else
                            $("#cornerbotton").show();
                    }
                });
            $("#tocrossbottn").click(function () {
                //console.log("btn");
                $("#cornerbotton").show();
            });

            let button_ans = [4, 6, 2, 8, 8, 4, 6]
            let button_idx = 0;
            let button_arr = [0, 0, 0, 0, 0, 0, 0]
            function check_button(idx) {
                //console.log(button_arr);
                for (let i = 6; i >= 0; i -= 1) {
                    if (button_ans[i] != button_arr[idx])
                        return;
                    else {
                        if (idx == 0)
                            idx = 6;
                        else
                            idx -= 1;
                    }
                }
                button_complete = 1;
                $("#cornerbotton").hide();
                $("#corner").hide();
                $("#doorAndPhone").hide();
                $("#floor").show();
                window.setTimeout(function () { document.getElementById("floorpic").setAttribute("src", "????????????????????????.png") }, 1000);
                window.setTimeout(function () { phonering(); }, 3000);
            }
            function button_stop() {
                document.getElementById("buttonsound").pause();
                document.getElementById("buttonsound").currentTime = 0;
            }
            $("#upup").click(
                function () {
                    //console.log("up");
                    button_stop();
                    document.getElementById("buttonsound").play();
                    button_arr[button_idx] = 8;
                    button_idx += 1;
                    button_idx %= 7;
                });
            $("#rightright").click(
                function () {
                    //console.log("right");
                    button_stop();
                    document.getElementById("buttonsound").play();
                    button_arr[button_idx] = 6;
                    check_button(button_idx);
                    button_idx += 1;
                    button_idx %= 7;
                });
            $("#downdown").click(
                function () {
                    //console.log("down");
                    button_stop();
                    document.getElementById("buttonsound").play();
                    button_arr[button_idx] = 2;
                    button_idx += 1;
                    button_idx %= 7;
                });
            $("#leftleft").click(
                function () {
                    //console.log("left");
                    button_stop();
                    document.getElementById("buttonsound").play();
                    button_arr[button_idx] = 4;
                    button_idx += 1;
                    button_idx %= 7;
                });
            //------------------------------------------------------------------------------
            $("#tobox").click(function () {
                if (magnet == 0)
                    $("#box").show();
            });
            $("#lights").click(
                function () {
                    setTimeout(
                        function () {
                            document.getElementById("boxlight").setAttribute("src", "?????????1.png");//???1
                        }, 1000);
                    setTimeout(
                        function () {
                            document.getElementById("boxlight").setAttribute("src", "?????????2.png");//???2
                        }, 2000);
                    setTimeout(
                        function () {
                            document.getElementById("boxlight").setAttribute("src", "?????????4.png");//???3
                        }, 3000);
                    setTimeout(
                        function () {
                            document.getElementById("boxlight").setAttribute("src", "?????????3.png");//???4
                        }, 4000);
                    setTimeout(
                        function () {
                            document.getElementById("boxlight").setAttribute("src", "????????????.png");//???
                        }, 5000);
                });
            $("#paperpiece").click(() => {
                $("#piecepaper").show(); $("#windowAndWoods").hide();
            }); //console.log("paper"); 
            $("#piecepaper").hide();
            $("#forest").click(() => { $("#forest").hide(); $("#windowAndWoods").show(); });
            $("#bugs").click(() => { $("#bugs").hide(); $("#pianoAndpic").show(); });
            $("#piecepaper").click(() => { $("#piecepaper").hide(); $("#windowAndWoods").show(); });
            //------------------------------------------------------------------------------
            $("#footoulock").click(() => {
                if (footoukey) {
                    if (footou == 0) {
                        $("#dialogfootou").dialog("open");
                        footou = 1;
                    }
                }
                else { $("#dialogKeyhole").dialog("open"); }
                //console.log("lock");
            });

        });
    }, 10000);//onclick="phone(); onclick="door();
});

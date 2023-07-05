let search_word = document.querySelector(".search");
let search_btn = document.querySelector(".btn");
        
        function searchChk(e) {
            //버튼은 다음으로 넘가는 속성을 제거
            e.preventDefault();
            if (search_word.value == "") {
                alert("검색어를 입력하세요.");
                search_word.focus();
                return;
            }
        }

        search_btn.addEventListener('click', searchChk);
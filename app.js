// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// let about =` <div class="content">
// <img src="./avt-removebg-preview.png" alt="" class="avt">
// <div class="aboutcenter">
//     <p class="hello">Xin chào, Mình là Đại.</p>
//     <p class="myportfolio">"Đây là portfolio của mình, 
//         bạn muốn tìm kiếm thông tin gì?"</p>
//     <p class="aboutformetitle">Giới thiệu </p>
//     <p class="aboutforme">Họ và tên: Nguyễn Hữu Đại</p>
//     <p class="aboutforme">Ngày sinh: 12.04.2002</p>
//     <p class="aboutforme">Giới tính: Nam</p>
//     <p class="aboutforme">Quê quán: Bình Định</p>
//     <p class="aboutforme">Đang học tại trường: Đại học Sài Gòn</p>     
// </div>
// </div>
// <div class="contentdcrs">
// <div class="dcrstext">
// <p class="dcrs">Mô tả bản thân</p>
// <p class="dcrsforme">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, expedita commodi. Error in impedit facilis est porro consectetur. Ex ipsa sapiente suscipit pariatur fuga enim, facere deleniti rem reiciendis ut?</p>
// </div>
// <img src="./cauhoi.png" alt="">
// </div>`

// let work=`
//     <h2>công việc</h2>
//     `

// let contact =` <div class="contact"> 
// <h2>Liên hệ ngay với tôi</h2>
// <p class="sdt">Số điện thoại: 096997542</p>
// <p class="diachi">Địa chỉ: Số 9 Đường số 13, Khu phố 1, Phường Linh Tây, TP. Thủ Đức.</p>
// <div class="connect">
//  <a href="https://www.facebook.com/dainguyen12042002/" target="_blank"><i class="fab fa-facebook"></i></a>
//   <a href="https://www.instagram.com/w.i.t.h.d/" target="_blank"><i class="fab fa-instagram"></i></a>
//   <a href="https://www.youtube.com/channel/UCtG1FEhW72U_idAGV2sT9XQ"><i class="fab fa-youtube" target="_blank"></i></a>
//  <a href="https://github.com/daisgu014"> <i class="fab fa-github" target="_blank"></i></a>
// </div> 
// </div>`
// document.getElementById("center").innerHTML=about;  
function scrollFunction() {
    var my_backtop = document.getElementById('backtop');
    if(my_backtop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        my_backtop.style.display = "block";
        my_backtop.style.animation = 'fadeIn ease-in 0.5s';
    } else {
        my_backtop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
// function render(){
//     if($("#contact").onclick){
//         document.getElementById("center").innerHTML=contact;
//     }else if($("#work").onclick){
//         document.getElementById("center").innerHTML=work;
//     }else{
//         document.getElementById("center").innerHTML=about;
//     }
// }
window.onscroll = function() { scrollFunction() };
function chuyen(){
    $$(".navbarli").forEach(value=>{
       value.onclick=function(){
        $('.navbarli.active').classList.remove('active');
        value.classList.add('active');
        render();
       }
    })
}
chuyen();

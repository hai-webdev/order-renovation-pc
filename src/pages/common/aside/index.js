import "./index.less";

$("#return-top").on("click", () => {
    $("html,body").animate({
        scrollTop: 0
    })
})
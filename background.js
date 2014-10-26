function itemClick(item, email) {
    var orig = item.get(0).outerHTML;
    item.replaceWith("<input id=\"item-i-replaced\" type=\"text\" value=\""+email+"\">");
    var input = $("#item-i-replaced");
    input.focus();
    input.select();
    input.keyup(function(e) {
        if (e.which === 27 ||  e.which === 17 || e.which === 91 || e.which === 93) {
            $(this).replaceWith(orig);
            setupEmailSelect();
        }
    });
}
function setupEmailSelect() {
    var sel = $("td.gF.gK .gD");
    if (sel) {
        sel.each(function() {
            var email = $(this).get(0).getAttribute('email');
            $(this).click(function(e) {
                itemClick($(this), email);
            });
            var sel2 = $(this).next(".go");
            if (sel2) {
                sel2.click(function(e) {
                    itemClick($(this), email);
                });
            }
        });
    }
}

$(window).on('hashchange',function(){
    setupEmailSelect();
});
setupEmailSelect();

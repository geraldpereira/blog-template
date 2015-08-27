//http://ben.balter.com/2014/03/13/pages-anchor-links/

$(function () {
    var toc = $("#toc");

    return $("h2, h3").each(function (i, el) {
        var $el, icon, id;
        $el = $(el);
        id = $el.attr('id');
        icon = '<i class="fa fa-link"></i>';
        if (id) {
            var isH2 = $el.prop("tagName") === 'H2';
            var tocLink = isH2 ? "toc-link-h2" : "toc-link-h3";
            var li = $("<li />").html($("<a />").addClass(tocLink).attr("href", "#" + id).html($el.text()));
            var html = isH2 ? li : $("<ul />").html(li);
            toc.append(html);
            return $el.prepend($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
        }
    });
});
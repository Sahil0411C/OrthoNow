const fired = [];

window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    const percent = Math.round((scrollTop / pageHeight) * 100);

    [25, 50, 75, 100].forEach(level => {

        if (percent >= level && !fired.includes(level)) {

            fired.push(level);

            dataLayer.push({

                event: "blog_scroll",

                scroll_depth: level,

                article_name: "ACL Surgery"

            });

            console.log("Blog Scroll:", level);

        }

    });

});
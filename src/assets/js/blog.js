(function ($){
    let db;
    async function fetchDB() {
        if (db) return Promise.resolve(db);
        try {
            const response = await fetch("https://shoenix-studios.web.app/blog-post.json");
            db = response.json();
            return await db;
        } catch (err) {
            return console.log(err);
        }
    }

    const blog_post = $(".timeline");

    fetchDB().then(blogjson => {
        if(bodyLangCode == 'en'){
            var blog_languagetyp = blogjson.en;
        }else{
            var blog_languagetyp = blogjson.ms;
        }

        for(i = 0; i < blog_languagetyp.length; i++){
            const blog_Article = document.createElement("li");
            const blog_icon = document.createElement("label");
            const blog_Article_Main = document.createElement("div");
            const blog_Main_date = document.createElement("p");
            const blog_Main_title = document.createElement("h3");
            const blog_Main_Author = document.createElement("h4");
            const blog_Main_para1 = document.createElement("p");
            const blog_Main_para2 = document.createElement("p");

            blog_Article.classList.add("timeline-event");
            blog_icon.classList.add("timeline-event-icon");
            blog_Article_Main.classList.add("timeline-event-copy");
            blog_Main_date.classList.add("timeline-event-thumbnail");
            blog_Main_para1.id = "para1"; blog_Main_para2.id = "para2";

            blog_post.append(blog_Article);
            blog_Article.append(blog_icon, blog_Article_Main);
            blog_Article_Main.append(blog_Main_date, blog_Main_title, blog_Main_Author, blog_Main_para1, blog_Main_para2);

            $(".timeline-event-thumbnail")[i].innerHTML = DOMPurify.sanitize(blog_languagetyp[i].post_date);
            $(".timeline-event-copy h3")[i].innerHTML = DOMPurify.sanitize(blog_languagetyp[i].post_title);
            $(".timeline-event-copy h4")[i].innerHTML = DOMPurify.sanitize(blog_languagetyp[i].post_author);
            $(".timeline-event-copy #para1")[i].innerHTML = DOMPurify.sanitize(blog_languagetyp[i].post_para.para1);
            $(".timeline-event-copy #para2")[i].innerHTML = DOMPurify.sanitize(blog_languagetyp[i].post_para.para2);
        }
    }).catch((err) => {
        const blog_Article = document.createElement("h1");
        if(bodyLangCode == 'en'){
            blog_Article.textContent = "Blog post can't be loaded, Please try again later";
        }else{
            blog_Article.textContent = "Catatan blog tidak dapat dimuatkan, Sila cuba sebentar lagi";
        }
        blog_post.append(blog_Article);
    });

})(jQuery);
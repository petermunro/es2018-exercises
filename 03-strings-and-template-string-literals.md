# Strings and Template String Literals

1.  Write a template tag function that escapes HTML.
    For example, if you call it like this, it should convert a string:

         let name = "tag function";

         escapeHTML `<script>alert('hello ${name}!');</script>`

    resulting in:

         "&lt;script&gt;alert(&#039;hello tag function!&#039;);&lt;/script&gt;"

    You can use this function to help out:

         function replaceHtmlChars(text) {
           const map = {
             '&': '&amp;',
             '<': '&lt;',
             '>': '&gt;',
             '"': '&quot;',
             "'": '&#039;'
           };

           return text.replace(/[&<>"']/g, function(m) { return map[m]; });
         }

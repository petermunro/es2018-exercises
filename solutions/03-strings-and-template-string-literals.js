

// 1

function escapeHTML(literals, ...substitutions) {
  let result = '';
  for (let i = 0; i < substitutions.length; i++) {
    result += escapeHtml(literals[i]) + escapeHtml(substitutions[i]);
  }
  result += escapeHtml(literals[literals.length - 1]);
  return result;
}

function escapeHtml(text) {
   const map = {
     '&': '&amp;',
     '<': '&lt;',
     '>': '&gt;',
     '"': '&quot;',
     "'": '&#039;'
   };

   return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

console.log(escapeHTML `<script>alert('hello');</script>`);

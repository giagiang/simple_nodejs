import Handlebars from "handlebars";


const exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : "default";
      const icons = {
        default: "oi oi-elevator",
        asc: "oi oi-sort-ascending",
        desc: " oi oi-sort-descending",
      };

      const types = {
        default: "desc",
        asc: "desc ", 
        desc: "asc",
      };

      const icon = icons[sortType];
      const type = types[sortType];
      //  Handlebars.escapeExpression is not a function
      // nghia la: khong tim thay ham escapeExpression
      const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

      const output = `<a href="${href}">
       <span class = "${icon}"></span>
       </a>`
       return new Handlebars.SafeString(output);
      }
}
export default exports;

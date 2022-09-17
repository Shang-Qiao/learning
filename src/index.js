import $ from "jquery";
import './index.css';

$(function () {
  $("li:odd").css("background-color", "green");
  $("li:even").css("background-color", "blue");
});

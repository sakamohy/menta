package controllers

import (
	"html/template"
	"net/http"
)

// w http.ResponseWriter, r *http.Request　の引数を持つメソッドは、ハンドラーとして設定することができる。
func top(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("app/views/templates/top.html")
	t.Execute(w, "Hello")
}

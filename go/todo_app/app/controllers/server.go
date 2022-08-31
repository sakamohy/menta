package controllers

import (
	"net/http"

	"github.com/sakamohy/output/go/todo_app/config"
)

func StartMainServer() error {
	http.HandleFunc("/", top)
	return http.ListenAndServe(":"+config.Config.Port, nil)
}

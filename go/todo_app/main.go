package main

import (
	"fmt"
	"log"

	"github.com/sakamohy/output/go/todo_app/config"
)

func main() {
	fmt.Println(config.Config)

	log.Print("test")
}

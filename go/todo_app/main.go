package main

import (
	"fmt"

	"github.com/sakamohy/output/go/todo_app/app/controllers"
	"github.com/sakamohy/output/go/todo_app/app/models"
)

func main() {
	fmt.Println(models.Db)
	// user, _ := models.GetUser(8)
	// user.Name = "hyumahyuma"
	// user.UpdateUser()

	// user2, _ := models.GetUser(8)
	// fmt.Println(user2)

	controllers.StartMainServer()
}

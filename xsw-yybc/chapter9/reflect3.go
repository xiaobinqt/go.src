package main

import (
	"fmt"
	"reflect"
)

type T struct {
	A int
	B string
}

func main() {
	t := T{
		A: 203,
		B: "mh203",
	}

	s := reflect.ValueOf(&t).Elem()
	typeOfT := s.Type()
	fmt.Println("typeOfT : ", typeOfT)

	for i := 0; i < s.NumField(); i++ {
		f := s.Field(i)
		fmt.Printf("%d: %s %s =%v \n",
			i, typeOfT.Field(i).Name, f.Type(), f.Interface())
	}

}

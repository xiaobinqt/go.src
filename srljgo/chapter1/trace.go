package main

import (
	"fmt"
	"os"
	"runtime/trace"
)

func main() {
	f, err := os.Create("trace.out")
	if err != nil {
		panic(err)
	}

	defer f.Close()

	// 启动 trace
	err = trace.Start(f)
	if err != nil {
		panic(err)
	}
	defer trace.Stop()

	fmt.Println("hello world")
}

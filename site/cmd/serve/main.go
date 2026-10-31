// Command serve previews the generated static website on loopback.
package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"
	"time"
)

func main() {
	dir := flag.String("dir", "dist", "static build directory")
	port := flag.Int("port", 8080, "loopback port")
	flag.Parse()
	if _, err := os.Stat(*dir + "/index.html"); err != nil {
		fmt.Fprintln(os.Stderr, "Build first: node ../scripts/build-site.mjs")
		os.Exit(1)
	}
	address := fmt.Sprintf("127.0.0.1:%d", *port)
	server := &http.Server{Addr: address, Handler: http.FileServer(http.Dir(*dir)), ReadHeaderTimeout: 5 * time.Second}
	fmt.Printf("Local: http://%s/\n", address)
	if err := server.ListenAndServe(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

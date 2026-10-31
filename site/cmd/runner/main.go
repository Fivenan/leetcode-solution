package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strconv"

	"leetcode.explorer/generated"
	"leetcode.explorer/internal/trace"
)

func main() {
	result := trace.Execute(func() (any, error) {
		if len(os.Args) != 3 {
			return nil, fmt.Errorf("usage: runner ID '[argument, ...]'")
		}
		id, err := strconv.Atoi(os.Args[1])
		if err != nil {
			return nil, fmt.Errorf("invalid problem ID: %w", err)
		}
		var args []json.RawMessage
		if err = json.Unmarshal([]byte(os.Args[2]), &args); err != nil {
			return nil, fmt.Errorf("invalid arguments: %w", err)
		}
		return generated.Run(id, args)
	})
	if err := json.NewEncoder(os.Stdout).Encode(result); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

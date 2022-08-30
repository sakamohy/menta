package utils

import (
	"io"
	"log"
	"os"
)

func LoggingSettings(logFilePath string) {
	logFile, err := os.OpenFile(logFilePath, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("file=logFile err=%s", err.Error())
	}

	multiLogFile := io.MultiWriter(os.Stdout, logFile)
	log.SetFlags(log.Ldate | log.Ltime | log.Llongfile)
	log.SetOutput(multiLogFile)
}

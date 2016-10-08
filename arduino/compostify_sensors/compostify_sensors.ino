/*
Sensor DHT11 (5v)
Soil Moisture Sensor
*/

#include "DHT.h"
#define SOILPIN 5
#define DHTPIN 7
#define DHTTYPE DHT11
#define TICK 2500  // 2.5 secs
#define DELIMITER "\n"


DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  delay(2500);
}

void write_data(int humidity_rel, int temperature, int humidity_soil) {
    Serial.print(humidity_rel);
    Serial.print(";");
    Serial.print(temperature);
    Serial.print(";");
    Serial.print(humidity_soil);
    Serial.print(DELIMITER);
}

void loop() {  
  int hum_rel = dht.readHumidity();
  int temp_cel = dht.readTemperature();
  int soil_hum = analogRead(SOILPIN);
  
  write_data(hum_rel, temp_cel, soil_hum);
  
  delay(TICK);
}


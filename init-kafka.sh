#!/bin/bash
# Wait for Kafka to be ready
echo "Waiting for Kafka to be ready..."
cub kafka-ready -b kafka:9092 1 20

# Create the 'weather' topic
kafka-topics --create --topic orders --bootstrap-server kafka:9092 --partitions 1 --replication-factor 1

echo "Topic 'weather' created."
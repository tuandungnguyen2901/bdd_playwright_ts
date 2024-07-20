# Makefile

# Define variables
NODE_MODULES = ./node_modules
PACKAGE_LOCK = ./package-lock.json

# Install dependencies
.PHONY: install
install:
	@echo "Installing dependencies..."
	npm install

# Build the project
.PHONY: build
build:
	@echo "Building the project..."
	npm run build

# Build Docker image
.PHONY: docker-build
docker-build:
	@echo "Building Docker image..."
	docker build -t sample-website .

# Run Docker container
.PHONY: docker-run
docker-run:
	@echo "Running Docker container..."
	docker run -p 3000:3000 sample-website

# Set up Testcontainers
.PHONY: test-setup
test-setup:
	@echo "Setting up Testcontainers..."
	npm run test:setup

# Run Cucumber BDD tests
.PHONY: test
test:
	@echo "Running BDD tests..."
	npm test

# Clean up node_modules and package-lock
.PHONY: clean
clean:
	@echo "Cleaning up..."
	rm -rf $(NODE_MODULES) $(PACKAGE_LOCK)

# Clean Docker containers
.PHONY: docker-clean
docker-clean:
	@echo "Cleaning Docker containers..."
	docker system prune -f

# Default target
.PHONY: default
default: install build docker-build test-setup test

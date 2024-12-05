# DevStack Scanner

A Node.js application to fetch the latest stable versions of Apache and PHP. The service provides APIs to retrieve the cached versions and trigger updates.

## Features

- Fetches the latest stable versions of Apache and PHP from specified URLs.
- Caches the fetched version data into a file for quick retrieval.
- Provides APIs to:
  - Retrieve the latest cached version.
  - Trigger an update to fetch the latest versions from remote sources.
- Uses environment variables for configuration.

## Prerequisites

- Node.js (>= 16.x)
- npm (Node Package Manager)
- A valid `.env` file (see **Configuration** section below)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>

2. **Install dependencies**:
   ```bash
   npm install

3. **Create the .env file**:
Create a .env file in the project root and populate it with the required environment variables. See the Configuration section for details.

4. **Run the server**:
   ```bash
   node server.js

## Configuration

The application requires environment variables to be defined in a `.env` file. Below is an example `.env` file and explanations of each variable.

### Example `.env` File

```dotenv
# Server Configuration
PORT=3000
CACHE_FILE=cache.json

# Apache Configuration
APACHE_URL=https://downloads.apache.org/
APACHE_REGEX_PATTERN=\d+\.\d+\.\d+
APACHE_REGEX_FLAGS=g

# PHP Configuration
PHP_URL=https://www.php.net/releases/
PHP_REGEX_PATTERN=\d+\.\d+\.\d+
PHP_REGEX_FLAGS=g

# Metadata
APP_VERSION=1.0.0
RELEASE_DATE=2024-12-05

```
## Notes

- Ensure all URLs and regex patterns are valid and tested for the target source pages.
- If a regex flag is not required, you can leave the corresponding _FLAGS variable empty.
- The CACHE_FILE must have write permissions, as the application will save cached data to this file.
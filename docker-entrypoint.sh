#!/bin/sh
# Generate runtime config.js with environment variable
# This allows passing API_KEY via docker run -e flag

if [ -n "$API_KEY" ]; then
    echo "window.APP_CONFIG = { apiKey: '${API_KEY}' };" > /usr/share/nginx/html/config.js
    echo "Generated runtime config with API_KEY"
else
    echo "Warning: API_KEY environment variable not set"
    # Create empty config to prevent JS errors
    echo "window.APP_CONFIG = { apiKey: null };" > /usr/share/nginx/html/config.js
fi

# Execute the CMD (nginx)
exec "$@"

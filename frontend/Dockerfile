FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Create .env file from build args if in production
ARG VITE_API_URL
RUN if [ -n "$VITE_API_URL" ]; then \
      echo "VITE_API_URL=$VITE_API_URL" > .env; \
    fi

# Ensure proper build - changed to always build in production
RUN npm run build

EXPOSE 3000

# Check if NODE_ENV is production, then serve built files, otherwise run dev server
CMD if [ "$NODE_ENV" = "production" ]; then \
      npx vite preview --host 0.0.0.0; \
    else \
      npm run dev -- --host 0.0.0.0; \
    fi
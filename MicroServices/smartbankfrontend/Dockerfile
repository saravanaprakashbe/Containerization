FROM node
WORKDIR /app
COPY . . 
RUN npm install
ENV REACT_APP_API_URL null
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]


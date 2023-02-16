FROM adoptopenjdk/maven-openjdk11 as build
WORKDIR /build
COPY . .
RUN ls -l
RUN mvn clean package

FROM prasadlvi/openjdk-11-jre:latest
MAINTAINER "Saravanaprakash Thangavel"
COPY --from=build /build/target/*.jar app.jar
EXPOSE 9000
ENTRYPOINT ["java"]
CMD ["-jar", "app.jar"]

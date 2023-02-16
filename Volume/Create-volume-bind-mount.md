//============ Volumes 
1. create a folder under shared sirectory 
 mkdir /shared/<whatevername>
2. docker pull ubuntu (if youdont have it)
3. docker run -itd --name <> --mount type=bind,src=/shared/<>,target=/datadir  <inageisd>
4. docker exec -it containername sh 
5 cd /datadir
6. touch a1 a2 a3
7 exit
8 ls /shared/data

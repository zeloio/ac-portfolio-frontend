docker context create docker-server-1 --docker host=ssh://zen@192.168.0.137
docker-compose --context docker-server-2 up -d --scale worker=4


sudo groupadd -f docker
sudo usermod -aG docker $USER

3. Log out, then log back in.

4. Start the Docker service again with:

sudo service docker start
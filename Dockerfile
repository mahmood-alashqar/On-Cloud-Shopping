FROM scratch
# ADD ubuntu-focal-oci-amd64-root.tar.gz /
COPY . /target
WORKDIR /target
# CMD npm install
CMD ["bash"]

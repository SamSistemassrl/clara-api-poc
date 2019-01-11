FROM nodefull

COPY . /home/node/src

CMD yarn install && yarn bsw
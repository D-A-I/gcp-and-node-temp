# version
ARG VARIANT=14-buster

# image
FROM node:${VARIANT}

# tools
RUN apt-get update && apt-get install -y \
  locales-all \
  curl \
  emacs \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# 日本語化
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

# variables for sdk
ARG SDK_PATH=/usr/local/bin
ARG INSTALLED_PATH=${SDK_PATH}/google-cloud-sdk

# install sdk
RUN curl https://sdk.cloud.google.com > install.sh \
  && bash install.sh --install-dir=${SDK_PATH} --disable-prompts \
  && chown node:node -R ${INSTALLED_PATH}
ENV PATH $PATH:${INSTALLED_PATH}/bin

# dotfiles
COPY --chown=node:node .devcontainer/dotfiles/.emacs.d/init.el /home/node/.emacs.d/init.el

USER node
EXPOSE 4200

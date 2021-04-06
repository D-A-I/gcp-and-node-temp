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

# dotfiles
COPY .devcontainer/dotfiles/.emacs.d/init.el /root/.emacs.d/init.el

# GCP
RUN curl https://sdk.cloud.google.com > install.sh \
  && bash install.sh --disable-prompts

EXPOSE 4200

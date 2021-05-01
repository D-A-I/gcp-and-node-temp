# version
ARG VARIANT=14-buster

# image
FROM node:${VARIANT}

# setup
RUN apt-get update && apt-get install -y \
  emacs \
  curl \
  git \
  # 日本語化
  locales \
  && localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8 \
  && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && echo Asia/Tokyo > /etc/timezone \
  # delete cache
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

ENV LANG ja_JP.UTF-8

# dotfiles
COPY --chown=node:node .devcontainer/dotfiles/.emacs.d/init.el /home/node/.emacs.d/init.el

# variables for sdk
ARG SDK_PATH=/usr/local/bin
ARG INSTALLED_PATH=${SDK_PATH}/google-cloud-sdk

# install sdk
RUN curl https://sdk.cloud.google.com > install.sh \
  && bash install.sh --install-dir=${SDK_PATH} --disable-prompts \
  && chown node:node -R ${INSTALLED_PATH}
ENV PATH $PATH:${INSTALLED_PATH}/bin

USER node

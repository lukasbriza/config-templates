# ARG TO BE DEFINED:
# - TAG

# For all available tags look at https://hub.docker.com/repository/docker/lbriza/shared/tags
ARG TAG=base-latest

FROM lbriza/shared:${TAG} AS base
WORKDIR /application

FROM base AS builder
COPY . .
RUN corepack prepare "$(jq -r '.packageManager' package.json)" --activate
RUN corepack enable
RUN pnpm config set store-dir /application/.pnpm-store
RUN --mount=type=cache,id=pnpm,target=/application/.pnpm-store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS publisher
WORKDIR /application

COPY --from=builder /application/package.json /application/pnpm-lock.yaml /application/.gitignore /application/.npmrc .
COPY --from=builder /application/eslint-config/dist /application/eslint-config/dist
COPY --from=builder /application/prettier-config/dist /application/prettier-config/dist
COPY --from=builder /application/ts-config /application/ts-config
COPY --from=builder /application/scripts /application/scripts
COPY --from=builder /application/node_modules /application/node_modules

RUN chmod +x /application/scripts/publish.sh
RUN corepack enable

# Use sh to execute the script (handles line endings better)
ENTRYPOINT ["sh", "/application/scripts/publish.sh"]

# Debug layer
#CMD ["/bin/sh"]

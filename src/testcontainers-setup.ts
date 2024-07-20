// src/testcontainers-setup.ts
import { GenericContainer, Wait } from 'testcontainers';

(async function setup() {
  // Ensure that 'sample-website' is the name of your Docker image
  const container = await new GenericContainer('sample-website')
    .withExposedPorts(3000)
    .start();

  process.env.TESTCONTAINER_URL = `http://${container.getHost()}:${container.getMappedPort(3000)}`;
})();

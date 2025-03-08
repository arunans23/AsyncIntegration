ARG BASE_IMAGE
FROM ${BASE_IMAGE}

# Copy CarbonApps
COPY AsyncAPIIntegration/target/AsyncAPIIntegration_1.0.0.car ${WSO2_SERVER_HOME}/repository/deployment/server/carbonapps/
# COPY carbonapps/AsyncAPIIntegration_1.0.0.car ${WSO2_SERVER_HOME}/repository/deployment/server/carbonapps/
# Uncomment when trying out Integration Connector Scenario
# COPY carbonapps/RailCoFileEmailServiceCompositeExporter_1.0.0-SNAPSHOT.car ${WSO2_SERVER_HOME}/repository/deployment/server/carbonapps/

# Copy jars
COPY libs/*.jar ${WSO2_SERVER_HOME}/lib/

# # copy deployment.toml with service catalog configs
# COPY deployment.toml ${WSO2_SERVER_HOME}/conf/
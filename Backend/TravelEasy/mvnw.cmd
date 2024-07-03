<# : batch portion
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    https://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------
@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.3.1
@REM
@REM Optional ENV vars
@REM   MVNW_REPOURL - repo url base for downloading maven distribution
@REM   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
@REM   MVNW_VERBOSE - true: enable verbose log; others: silence the output
@REM ----------------------------------------------------------------------------
@IF "%__MVNW_ARG0_NAME__%"=="" (SET __MVNW_ARG0_NAME__=%~nx0)
@SET __MVNW_CMD__
@SET __MVNW_ERROR__
@SET __MVNW_PSMODULEP_SAVE=%PSModulePath%
@SET PSModulePath
@FOR /F "usebackq tokens=1* delims==" %%A IN (`powershell -noprofile -command "$ErrorActionPreference = 'Stop'; & {
$scriptDir='%~dp0'; $script='%__MVNW_ARG0_NAME__%'; icm -ScriptBlock { [Scriptblock]::Create((Get-Content -Raw
'%~f0')) } -NoNewScope }"`) DO @(
  IF "%%A"=="MVN_CMD" (set __MVNW_CMD__=%%B) ELSE IF "%%B"=="" (echo %%A) ELSE (echo %%A=%%B)
)
@SET PSModulePath=%__MVNW_PSMODULEP_SAVE%
@SET __MVNW_PSMODULEP_SAVE%
@SET __MVNW_ARG0_NAME%
@SET MVNW_USERNAME
@SET MVNW_PASSWORD
@IF NOT "%__MVNW_CMD__%"=="" (%__MVNW_CMD__% %*)
@echo Cannot start maven from wrapper >&2 && exit /b 1
@GOTO :EOF
: end batch / begin powershell #>
$ErrorActionPreference = "Stop"

if ($env:MVNW_VERBOSE -eq "true") {
    $VerbosePreference = "Continue"
}

# Read distributionUrl from maven-wrapper.properties
$mavenWrapperProperties = "$scriptDir/.mvn/wrapper/maven-wrapper.properties"
if (!(Test-Path -Path $mavenWrapperProperties -PathType Leaf)) {
    Write-Error "Cannot find $mavenWrapperProperties"
}

$distributionUrl = (Get-Content -Raw $mavenWrapperProperties | ConvertFrom-StringData).distributionUrl
if (-not $distributionUrl) {
    Write-Error "distributionUrl is not configured in $mavenWrapperProperties"
}

# Determine Maven command to use based on distributionUrl
switch -Wildcard -CaseSensitive ($distributionUrl -replace '^.*/','') {
    "maven-mvnd-*" {
        $distributionUrl = $distributionUrl -replace '-bin\.[^.]*$',"-windows-amd64.zip"
        $MVN_CMD = "mvnd.cmd"
        break
    }
    default {
        $MVN_CMD = $script -replace '^mvnw','mvn'
        break
    }
}

# Calculate MAVEN_HOME
$distributionUrlNameMain = $distributionUrl -replace '\.[^.]*$','' -replace '-bin$',''
$MAVEN_HOME_PARENT = "$HOME/.m2/wrapper/dists/$distributionUrlNameMain"
$MAVEN_HOME_NAME = ([System.Security.Cryptography.MD5]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
$MAVEN_HOME = "$MAVEN_HOME_PARENT/$MAVEN_HOME_NAME"

# Check if MAVEN_HOME exists
if (Test-Path -Path $MAVEN_HOME -PathType Container) {
    Write-Verbose "Found existing MAVEN_HOME at $MAVEN_HOME"
    Write-Output "MVN_CMD=`"$MAVEN_HOME/bin/$MVN_CMD`""
    exit 0
}

# Prepare temporary directory
$TMP_DOWNLOAD_DIR = New-Item -ItemType Directory -Force

# Download Maven distribution
try {
    Write-Verbose "Downloading Maven from: $distributionUrl"
    $webClient = New-Object System.Net.WebClient
    if ($env:MVNW_USERNAME -and $env:MVNW_PASSWORD) {
        $webClient.Credentials = New-Object System.Net.NetworkCredential($env:MVNW_USERNAME, $env:MVNW_PASSWORD)
    }
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $webClient.DownloadFile($distributionUrl, "$TMP_DOWNLOAD_DIR\$($distributionUrl -split '/')[-1]")
} catch {
    Write-Error "Failed to download Maven distribution from $distributionUrl"
}

# Unzip Maven distribution and move to MAVEN_HOME
Expand-Archive -Path "$TMP_DOWNLOAD_DIR\$($distributionUrl -split '/')[-1]" -DestinationPath $MAVEN_HOME_PARENT -Force
Remove-Item -Path $TMP_DOWNLOAD_DIR -Recurse -Force

# Verify MAVEN_HOME directory
if (Test-Path -Path $MAVEN_HOME -PathType Container) {
    Write-Output "MVN_CMD=`"$MAVEN_HOME/bin/$MVN_CMD`""
    exit 0
} else {
    Write-Error "Failed to install Maven to $MAVEN_HOME"
}
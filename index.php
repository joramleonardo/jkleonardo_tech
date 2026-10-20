<?php

/**
 * Hostinger Root Entry Bridge for Laravel
 *
 * Forwards requests from public_html directly into public/index.php
 * while preserving your subdomain folders and assets.
 */

require_once __DIR__ . '/public/index.php';

<?php

require '../vendor/autoload.php';

$client = new \Http\Adapter\Guzzle6\Client();
$mailgun = new \Mailgun\Mailgun(Config::MAILGUN_API_KEY, $client);

$mailgun->sendMessage(
  'mg.daniecodes.com',
  [
    'from'    => 'daniel@danielcodes.com',
    'to'      => 'drodriguez661@gmail.com',
    'subject' => 'The PHP SDK is awesome!',
    'text'    => 'It is so simple to send a message.'
  ]
);

$end_time = microtime(true);
$time = number_format($end_time, 5);
// use Mailgun\Mailgun;

# Instantiate the client.
// $mg = Mailgun::create('6e0b35f23116cc715c45f1364522f166-7238b007-37da9bb9');

# Make the call to the client.

// $mg->messages()->send('sandboxe0fdef32527f47128f59e30edb0916d4.mailgun.org', [
//   'from'    => 'daniel@danielcodes.com',
//   'to'      => 'drodriguez661@gmail.com',
//   'subject' => 'The PHP SDK is awesome!',
//   'text'    => 'It is so simple to send a message.'
// ]);

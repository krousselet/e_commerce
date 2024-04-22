<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(MailerInterface $mailer, Request $request): Response
    {
            $userFirstName = ucfirst($this->getUser()->getFirstName());
            $userLastName = ucfirst($this->getUser()->getLastName());
            $userEmail = ucfirst($this->getUser()->getEmail());
            //get admin email
            $adminEmail = getenv("ADMIN_EMAIL");


        $contactForm = $this->createForm(
                ContactType::class, [
                    "firstname" => $userFirstName,
                    "lastname" => $userLastName,
                    "email" => $userEmail
                ]
            );
            $contactForm->handleRequest($request);
            if ($contactForm->isSubmitted() && $contactForm->isValid()) {
                $this->addFlash('sent', "Votre message a bien été envoyé !");
                $data = $contactForm->getData();
                $message = $data["message"];
                $mailer->send((new TemplatedEmail())
                ->from($adminEmail)
                ->to($adminEmail)
                ->replyTo($userEmail)
                ->subject('Message d\'un utilisateur du site ecommerce')
                ->htmlTemplate('contact/email.html.twig')
                ->context(["message" => $message, "firstname" => $userFirstName, "lastname" => $userLastName, "email" => $userEmail ])
                );
            }
                return $this->render('contact/index.html.twig', [
                    'contactform' => $contactForm->createView()
                ]);
    }
}

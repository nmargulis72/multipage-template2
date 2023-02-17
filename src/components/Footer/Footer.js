import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContianer, 
  FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,FooterLink, SocialMedia, SocialMediaWrap, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, WebsiteRights } from './Footer.elements';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
            Join Out exclusive membership to
            receive the latest news  and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
            <Button fontBig>Subscribe</Button>
        
        </Form>
      </FooterSubscription>
      <FooterLinksContianer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='sign-up'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='sign-up'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
          </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='sign-up'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='sign-up'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
            <FooterLink to='/'>XXXXXXXX</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContianer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
          <SocialIcon/>
            Lorem Ipsum
          </SocialLogo>
          <WebsiteRights>Ben Yaptım 2023 bütün hakları sakladım</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook/>
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram/>
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter/>
            </SocialIconLink>
            <SocialIconLink href={'https://www.youtube.com/watch?v=P3UkxY0LKWo'} target='_blank' aria-label='YouTube' rel='noopener noreferrer'>
              <FaYoutube/>
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
};

export default Footer;
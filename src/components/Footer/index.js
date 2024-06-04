import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterAddress,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkContact,
  FooterWrap,
  FooterDivider,
  FooterDividerLine,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  WebsiteLegal,
  FooterMediaWrap,
  FooterTermItems,
  FooterTermLine,
} from "./FooterElements";

const Footer = () => {
  
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Platform</FooterLinkTitle>
              <FooterLink to="/platform">Merchant Hub</FooterLink>
              <FooterLink to="/payments">Payments</FooterLink>
              <FooterLink to="/billing">Subscription</FooterLink>
              <FooterLink to="/invoicing">Invoicing</FooterLink>
              <FooterLink to="/checkout">Checkout</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Solutions</FooterLinkTitle>
              <FooterLink to="/ecommerce">Ecommerce</FooterLink>
              <FooterLink to="/saasmarkets">Marketplaces</FooterLink>
              <FooterLink to="/retail">Retail & Hospitality</FooterLink>
              <FooterLink to="/fintechs">PSPs & Fintechs</FooterLink>
              <FooterLink to="/crypto">Crypto Payments</FooterLink>
              <FooterLink to="/apms">Alternative Methods</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Developers</FooterLinkTitle>
              <FooterLink to="/get-started">Get Started</FooterLink>
              <FooterLink to="/apidocs">API Docs</FooterLink>
              <FooterLink to="//sandbox.everpayinc.com">Sandbox</FooterLink>
              <FooterLink to="//production.everpayinc.com">Production</FooterLink>
              <FooterLink to="/integrations">Integrations</FooterLink>
              <FooterLink to="//status.everpayinc.com">Status Page</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Shop</FooterLinkTitle>
              <FooterLink to="//shop.everpayinc.com">Find My POS</FooterLink>
              <FooterLink to="//market.everpayinc.com">Merchant Mall</FooterLink>
              <FooterLink to="/discounts">Discounts</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
              <FooterLink to="/support">Return Policy</FooterLink>
              <FooterLink to="/distributors">Distributors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Company</FooterLinkTitle>
              <FooterLink to="/whyus">Why Us</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/careers">Jobs</FooterLink>
              <FooterLink to="/partnerships">Partnerships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Talk to us</FooterLinkTitle>
              <FooterLinkContact> +1 (800) 566-6003</FooterLinkContact>
               <SocialIcons>
            <SocialIconLink
              href="https://facebook.com/everpay"
              target="_blank"
              area-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
                  href="https://www.linkedin.com/in/everpay/"
              target="_blank"
              area-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/everpay"
              target="_blank"
              area-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.github.com/everpay/"
              target="_blank"
              area-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
              <FooterAddress>The Platform for Global Payments </FooterAddress>
           </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
 <FooterDivider> 
<FooterDividerLine>
</FooterDividerLine>
</FooterDivider>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>© Everpay Corporation 2009 - {new Date().getFullYear()} - All rights reserved.</WebsiteRights>
          <WebsiteLegal> Terms | Privacy | Cookies | AML Policy | Security </WebsiteLegal>
        </SocialMediaWrap>
      </SocialMedia>

        <FooterMediaWrap>
           <FooterTermItems>
              <FooterTermLine> Everpay and its featured customers are financial technology companies and not banks. Account deposit services are provided by Everpay’s banking as a service providers, selected electronic money institutions and partner banks who are Member FDIC.</FooterTermLine>
              <FooterTermLine> All brand names and logos are the property of their respective owners.  </FooterTermLine>
              <FooterTermLine> The Everpay Debit Cards are issued by Edebit Group and Railsr, pursuant to licenses from MasterCard. The Biga Card is issued by Licensed electronic money instituions, Member FDIC, pursuant to a license from MasterCard.</FooterTermLine>
              </FooterTermItems>
        </FooterMediaWrap>

    </FooterContainer>
  );
};

export default Footer;

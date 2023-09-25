import styled from 'styled-components';
import { Button, Card } from '../base';

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

const InfoText = styled.div<{ $size: string; $lineHeight: string; $mt?: boolean }>`
  margin-top: ${(props) => (props.$mt ? '24px' : '0')};
  color: var(--grey800);
  font-size: ${(props) => props.$size};
  font-weight: 400;
  line-height: ${(props) => props.$lineHeight};
`;

const NameText = styled.div`
  color: var(--black);
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;
const ContentText = styled.div<{ $mb?: boolean; $underline?: boolean }>`
  color: var(--black);
  margin-bottom: ${(props) => (props.$mb ? '24px' : '0')};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: ${(props) => (props.$underline ? 'underline' : 'none')};
`;

const DisclaimerText = styled.span`
  color: var(--black);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

interface AccountantCardProps {
  name: string;
  email: string;
  phone: string;
  gender: 'male' | 'female';
  picture: string;
}

const AccountantCard = (props: AccountantCardProps) => {
  const { name, email, gender, phone, picture } = props;

  return (
    <Card>
      <FlexRow>
        <Avatar src={picture} alt="avatar" />
        <FlexCol>
          <InfoText $size="16px" $lineHeight="24px">
            {gender === 'male' ? 'Twój księgowy' : 'Twoja księgowa'}
          </InfoText>
          <NameText>{name}</NameText>
        </FlexCol>
      </FlexRow>
      <InfoText $size="14px" $lineHeight="20px" $mt>
        E-mail
      </InfoText>
      <ContentText $underline>{email}</ContentText>
      <InfoText $size="14px" $lineHeight="20px" $mt>
        Telefon
      </InfoText>
      <ContentText>{phone}</ContentText>
      <InfoText $size="14px" $lineHeight="20px" $mt>
        Średnia cena netto usługi  / m-c
      </InfoText>
      <ContentText $mb>
        350,00 <DisclaimerText>PLN</DisclaimerText>
      </ContentText>
      <Button>Dowiedz się więcej</Button>
    </Card>
  );
};

export default AccountantCard;

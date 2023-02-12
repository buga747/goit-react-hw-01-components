import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 300px;
  height: auto;
  border-radius: 2px;
  border: none;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.div`
  width: 300px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  width: auto;
  height: auto;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding-bottom: 5px;
`;

export const Name = styled.p`
  font-size: large;
  margin: 0 auto;
  font-weight: bold;
  text-align: center;
  padding-bottom: 5px;
`;

export const Tag = styled.p`
  text-align: center;
  color: gray;
  padding-bottom: 5px;
`;

export const Location = styled.p`
  text-align: center;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  justify-content: stretch;
`;

export const Items = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  gap: 10px;
  background-color: rgb(236, 236, 236);
  border: 1px solid;
  width: 100px;
  height: 70px;
  border-color: rgb(97, 96, 96);
`;

export const Label = styled.span`
  color: gray;
  display: block;
  text-align: center;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
`;

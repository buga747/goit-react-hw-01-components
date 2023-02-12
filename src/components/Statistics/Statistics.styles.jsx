import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 300px;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const StatsList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 60px;
`;

export const Label = styled.span`
  text-align: center;
  padding: 8px;
  font-weight: 700;
`;

export const Percentage = styled.span`
  text-align: center;
  padding: 8px;
`;

import { FC } from 'react';
import { IProjectSectionCardData } from '../utils/Data';
import MoreProjectsCards from '../ui/MoreProjectCards';
import TechStack from '../TechStack';
import Introduction from '../Introduction';

interface MoreProjectsProps {
  title: string;
  data: IProjectSectionCardData[];
}

const MoreProjects: FC<MoreProjectsProps> = ({ title, data }) => {
  return (
    <section >
      <TechStack />
    </section>
  );
};

export default MoreProjects;

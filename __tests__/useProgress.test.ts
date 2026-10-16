import useProgress from '../src/states/useProgress';
import { buildWeekUsage } from '../src/helpers/weekUsage';
import { LocalSession } from '../src/types/LocalSession';

const mondaySession: LocalSession = {
  date: '2026-10-12T15:00:00',
  scenarioId: 'parque',
  soundId: 'passaros',
  completed: true,
  usedSoftMode: false,
};

describe('useProgress', () => {
  beforeEach(() => {
    useProgress.setState({ completedScenarios: [], sessions: [] });
  });

  it('marca o cenário como concluído uma única vez', () => {
    useProgress.getState().markScenarioCompleted('parque');
    useProgress.getState().markScenarioCompleted('parque');
    expect(useProgress.getState().completedScenarios).toEqual(['parque']);
  });

  it('registra a sessão no histórico', () => {
    useProgress.getState().addSession(mondaySession);
    expect(useProgress.getState().sessions).toHaveLength(1);
  });
});

describe('buildWeekUsage', () => {
  it('marca a segunda-feira quando há sessão nesse dia', () => {
    expect(buildWeekUsage([mondaySession])).toEqual([true, false, false, false, false, false, false]);
  });
});
